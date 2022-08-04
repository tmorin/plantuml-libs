# Ethereum


```text
fontawesome-6/Brands/Ethereum
```

```text
include('fontawesome-6/Brands/Ethereum')
```



| Illustration | Ethereum |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Ethereum.png) | ![illustration for Ethereum](../../fontawesome-6/Brands/Ethereum.Local.png) |




## Ethereum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ethereum
include('fontawesome-6/Brands/Ethereum')

' renders the element
Ethereum('Ethereum', 'Ethereum', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ethereum
include('fontawesome-6/Brands/Ethereum')

' renders the element
Ethereum('Ethereum', 'Ethereum', 'an optional tech label', 'an optional description')
@enduml
```

