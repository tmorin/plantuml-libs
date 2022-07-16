# Trustpilot


```text
simpleicons-7/T/Trustpilot
```

```text
include('simpleicons-7/T/Trustpilot')
```



| Illustration | Trustpilot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Trustpilot.png) | ![illustration for Trustpilot](../../simpleicons-7/T/Trustpilot.Local.png) |




## Trustpilot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Trustpilot
include('simpleicons-7/T/Trustpilot')

' renders the element
Trustpilot('Trustpilot', 'Trustpilot', 'an optional tech label')
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

' loads the Item which embeds the element Trustpilot
include('simpleicons-7/T/Trustpilot')

' renders the element
Trustpilot('Trustpilot', 'Trustpilot', 'an optional tech label')
@enduml
```

