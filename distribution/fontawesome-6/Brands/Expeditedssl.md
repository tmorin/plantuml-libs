# Expeditedssl


```text
fontawesome-6/Brands/Expeditedssl
```

```text
include('fontawesome-6/Brands/Expeditedssl')
```



| Illustration | Expeditedssl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Expeditedssl.png) | ![illustration for Expeditedssl](../../fontawesome-6/Brands/Expeditedssl.Local.png) |




## Expeditedssl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Expeditedssl
include('fontawesome-6/Brands/Expeditedssl')

' renders the element
Expeditedssl('Expeditedssl', 'Expeditedssl', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Expeditedssl
include('fontawesome-6/Brands/Expeditedssl')

' renders the element
Expeditedssl('Expeditedssl', 'Expeditedssl', 'an optional tech label')
@enduml
```

