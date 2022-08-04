# Neos


```text
fontawesome-6/Brands/Neos
```

```text
include('fontawesome-6/Brands/Neos')
```



| Illustration | Neos |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Neos.png) | ![illustration for Neos](../../fontawesome-6/Brands/Neos.Local.png) |




## Neos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Neos
include('fontawesome-6/Brands/Neos')

' renders the element
Neos('Neos', 'Neos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Neos
include('fontawesome-6/Brands/Neos')

' renders the element
Neos('Neos', 'Neos', 'an optional tech label', 'an optional description')
@enduml
```

