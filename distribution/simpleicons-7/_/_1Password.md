# _1Password


```text
simpleicons-7/_/_1Password
```

```text
include('simpleicons-7/_/_1Password')
```



| Illustration | _1Password |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/_/_1Password.png) | ![illustration for _1Password](../../simpleicons-7/_/_1Password.Local.png) |




## _1Password

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element _1Password
include('simpleicons-7/_/_1Password')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element _1Password
include('simpleicons-7/_/_1Password')

' renders the element
_1Password('1password', '1password', 'an optional tech label', 'an optional description')
@enduml
```

