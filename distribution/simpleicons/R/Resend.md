# Resend


```text
simpleicons/R/Resend
```

```text
include('simpleicons/R/Resend')
```



| Illustration | Resend |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Resend.png) | ![illustration for Resend](../../simpleicons/R/Resend.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ResendXs>`
- `<$ResendSm>`
- `<$ResendMd>`
- `<$ResendLg>`





## Resend

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Resend
include('simpleicons/R/Resend')

' renders the element
Resend('Resend', 'Resend', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Resend
include('simpleicons/R/Resend')

' renders the element
Resend('Resend', 'Resend', 'an optional tech label', 'an optional description')
@enduml
```

