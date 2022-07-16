# Viber


```text
simpleicons-7/V/Viber
```

```text
include('simpleicons-7/V/Viber')
```



| Illustration | Viber |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Viber.png) | ![illustration for Viber](../../simpleicons-7/V/Viber.Local.png) |




## Viber

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Viber
include('simpleicons-7/V/Viber')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Viber
include('simpleicons-7/V/Viber')

' renders the element
Viber('Viber', 'Viber', 'an optional tech label')
@enduml
```

