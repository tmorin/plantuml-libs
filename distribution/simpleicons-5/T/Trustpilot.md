# Trustpilot


```text
simpleicons-5/T/Trustpilot
```

```text
include('simpleicons-5/T/Trustpilot')
```



| Illustration | Trustpilot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Trustpilot.png) | ![illustration for Trustpilot](../../simpleicons-5/T/Trustpilot.Local.png) |




## Trustpilot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Trustpilot
include('simpleicons-5/T/Trustpilot')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Trustpilot
include('simpleicons-5/T/Trustpilot')

' renders the element
Trustpilot('Trustpilot', 'Trustpilot', 'an optional tech label')
@enduml
```

