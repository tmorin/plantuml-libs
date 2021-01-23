# Typo3

```text
simpleicons-4/T/Typo3
```

```text
include('simpleicons-4/T/Typo3')
```

|icon|element|
|---|---|
|![](Typo3.png)|![](Typo3.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Typo3 element
include('simpleicons-4/T/Typo3')
Typo3('typo_3', 'Typo3', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Typo3 element
include('simpleicons-4/T/Typo3')
Typo3('typo_3', 'Typo3', 'an optional tech field')
@enduml
```
