# Neos


```text
fontawesome-5/Brands/Neos
```

```text
include('fontawesome-5/Brands/Neos')
```



| Illustration | Neos |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Neos.png) | ![illustration for Neos](../../fontawesome-5/Brands/Neos.Local.png) |




## Neos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Neos
include('fontawesome-5/Brands/Neos')

' renders the element
Neos('Neos', 'Neos', 'an optional tech label')
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

' loads the Item which embeds the element Neos
include('fontawesome-5/Brands/Neos')

' renders the element
Neos('Neos', 'Neos', 'an optional tech label')
@enduml
```

