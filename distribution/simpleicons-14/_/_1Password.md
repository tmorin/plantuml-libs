# _1Password


```text
simpleicons-14/_/_1Password
```

```text
include('simpleicons-14/_/_1Password')
```



| Illustration | _1Password |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/_/_1Password.png) | ![illustration for _1Password](../../simpleicons-14/_/_1Password.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$_1PasswordXs>`
- `<$_1PasswordSm>`
- `<$_1PasswordMd>`
- `<$_1PasswordLg>`





## _1Password

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element _1Password
include('simpleicons-14/_/_1Password')

' renders the element
_1Password('1password', '1password', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element _1Password
include('simpleicons-14/_/_1Password')

' renders the element
_1Password('1password', '1password', 'an optional tech label', 'an optional description')
@enduml
```

