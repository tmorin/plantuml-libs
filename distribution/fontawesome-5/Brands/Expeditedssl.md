# Expeditedssl


```text
fontawesome-5/Brands/Expeditedssl
```

```text
include('fontawesome-5/Brands/Expeditedssl')
```



| Illustration | Expeditedssl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Expeditedssl.png) | ![illustration for Expeditedssl](../../fontawesome-5/Brands/Expeditedssl.Local.png) |




## Expeditedssl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Expeditedssl
include('fontawesome-5/Brands/Expeditedssl')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Expeditedssl
include('fontawesome-5/Brands/Expeditedssl')

' renders the element
Expeditedssl('Expeditedssl', 'Expeditedssl', 'an optional tech label')
@enduml
```

