# Tele5


```text
simpleicons-8/T/Tele5
```

```text
include('simpleicons-8/T/Tele5')
```



| Illustration | Tele5 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Tele5.png) | ![illustration for Tele5](../../simpleicons-8/T/Tele5.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Tele5Xs>`
- `<$Tele5Sm>`
- `<$Tele5Md>`
- `<$Tele5Lg>`





## Tele5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tele5
include('simpleicons-8/T/Tele5')

' renders the element
Tele5('Tele5', 'Tele5', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tele5
include('simpleicons-8/T/Tele5')

' renders the element
Tele5('Tele5', 'Tele5', 'an optional tech label', 'an optional description')
@enduml
```

