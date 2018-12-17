<template>
    <div class="login-form">
        <div class="g-form-line">
            <span class="g-form-label">用户名：</span>
            <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <div class="g-form-line">
            <div class="g-form-btn">
                <a class="button" @click="onLogin">登录</a>
            </div>
        </div>
    </div>
</template>