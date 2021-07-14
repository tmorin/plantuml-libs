# Typo3


```text
simpleicons-5/T/Typo3
```

```text
include('simpleicons-5/T/Typo3')
```



| Illustration | Typo3 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Typo3.png) | ![illustration for Typo3](../../simpleicons-5/T/Typo3.Local.png) |




## Typo3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Typo3
include('simpleicons-5/T/Typo3')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Typo3
include('simpleicons-5/T/Typo3')

' renders the element
Typo3('Typo3', 'Typo3', 'an optional tech label')
@enduml
```

