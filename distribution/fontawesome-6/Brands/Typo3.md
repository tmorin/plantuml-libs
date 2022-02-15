# Typo3


```text
fontawesome-6/Brands/Typo3
```

```text
include('fontawesome-6/Brands/Typo3')
```



| Illustration | Typo3 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Typo3.png) | ![illustration for Typo3](../../fontawesome-6/Brands/Typo3.Local.png) |




## Typo3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Typo3
include('fontawesome-6/Brands/Typo3')

' renders the element
Typo3('Typo3', 'Typo3', 'an optional tech label')
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

' loads the Item which embeds the element Typo3
include('fontawesome-6/Brands/Typo3')

' renders the element
Typo3('Typo3', 'Typo3', 'an optional tech label')
@enduml
```

