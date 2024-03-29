<?php if (!defined('APPLICATION')) exit();
$Methods = $this->data('Methods', []);
$SelectedMethod = $this->data('SelectedMethod', []);
$CssClass = count($Methods) > 0 ? ' MultipleEntryMethods' : ' SingleEntryMethod';

echo '<div class="FormTitleWrapper AjaxForm">';
echo '<h1>'.$this->data('Title').'</h1>';
echo '<div class="FormWrapper">';
// Make sure to force this form to post to the correct place in case the view is
// rendered within another view (ie. /dashboard/entry/index/):
echo $this->Form->open(['Action' => $this->data('FormUrl', url('/entry/signin')), 'id' => 'Form_User_SignIn']);
echo $this->Form->errors();

echo '<div class="Entry'.$CssClass.'">';

// Render the main signin form.
echo '<div class="MainForm">';
?>
    <ul>
        <li>
            <?php
            echo $this->Form->label('Email/Username', 'Email');
            echo $this->Form->textBox('Email', ['id' => 'Form_Email', 'autocorrect' => 'off', 'autocapitalize' => 'off', 'Wrap' => TRUE]);
            ?>
        </li>
        <li>
            <?php
            echo $this->Form->label('Password', 'Password');
            echo $this->Form->input('Password', 'password', ['class' => 'InputBox Password']);
            echo anchor(t('Forgot?'), '/entry/passwordrequest', 'ForgotPassword');
            ?>
        </li>
    </ul>
<?php


echo '</div>';

// Render the buttons to select other methods of signing in.
if (count($Methods) > 0) {
    echo '<div class="Methods">'
        .wrap('<b>'.t('Or you can...').'</b>', 'div');

    foreach ($Methods as $Key => $Method) {
        $CssClass = 'Method Method_'.$Key;
        echo '<div class="'.$CssClass.'">',
        $Method['SignInHtml'],
        '</div>';
    }

    echo '</div>';
}

echo '</div>';

?>
    <div class="Buttons">
        <?php
        echo $this->Form->button('Sign In', ['class' => 'Button Primary']);
        echo $this->Form->checkBox('RememberMe', t('Keep me signed in'), ['value' => '1', 'id' => 'SignInRememberMe']);
        ?>
        <?php if (strcasecmp(c('Garden.Registration.Method'), 'Connect') != 0): ?>
            <div class="CreateAccount">
                <?php
                $Target = $this->target();
                if ($Target != '') {
                    $Target = '?Target='.urlencode($Target);
                }

                if (c('Garden.Registration.Method') != 'Invitation') {
                    printf(t("Don't have an account? %s"), anchor(t('Create One.'), '/entry/register'.$Target));
                }
                ?>
            </div>
        <?php endif; ?>

    </div>

<?php
echo $this->Form->close();
echo '<div />';
echo '<div />';
