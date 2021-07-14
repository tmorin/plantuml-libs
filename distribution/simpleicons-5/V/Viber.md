# Viber


```text
simpleicons-5/V/Viber
```

```text
include('simpleicons-5/V/Viber')
```



| Illustration | Viber |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Viber.png) | ![illustration for Viber](../../simpleicons-5/V/Viber.Local.png) |




## Viber

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Viber
include('simpleicons-5/V/Viber')

' renders the element
Viber('Viber', 'Viber', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Viber
include('simpleicons-5/V/Viber')

' renders the element
Viber('Viber', 'Viber', 'an optional tech label')
@enduml
```

