# Vonage


```text
simpleicons-7/V/Vonage
```

```text
include('simpleicons-7/V/Vonage')
```



| Illustration | Vonage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vonage.png) | ![illustration for Vonage](../../simpleicons-7/V/Vonage.Local.png) |




## Vonage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vonage
include('simpleicons-7/V/Vonage')

' renders the element
Vonage('Vonage', 'Vonage', 'an optional tech label')
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

' loads the Item which embeds the element Vonage
include('simpleicons-7/V/Vonage')

' renders the element
Vonage('Vonage', 'Vonage', 'an optional tech label')
@enduml
```

