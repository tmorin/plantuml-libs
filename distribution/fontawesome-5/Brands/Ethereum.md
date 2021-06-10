# Ethereum


```text
fontawesome-5/Brands/Ethereum
```

```text
include('fontawesome-5/Brands/Ethereum')
```



| Illustration | Ethereum |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Ethereum.png) | ![illustration for Ethereum](../../fontawesome-5/Brands/Ethereum.Local.png) |




## Ethereum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ethereum
include('fontawesome-5/Brands/Ethereum')

' renders the element
Ethereum('Ethereum', 'Ethereum', 'an optional tech label')
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

' loads the Item which embeds the element Ethereum
include('fontawesome-5/Brands/Ethereum')

' renders the element
Ethereum('Ethereum', 'Ethereum', 'an optional tech label')
@enduml
```

