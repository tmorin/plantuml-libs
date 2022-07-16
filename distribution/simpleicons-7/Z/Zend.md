# Zend


```text
simpleicons-7/Z/Zend
```

```text
include('simpleicons-7/Z/Zend')
```



| Illustration | Zend |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zend.png) | ![illustration for Zend](../../simpleicons-7/Z/Zend.Local.png) |




## Zend

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zend
include('simpleicons-7/Z/Zend')

' renders the element
Zend('Zend', 'Zend', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zend
include('simpleicons-7/Z/Zend')

' renders the element
Zend('Zend', 'Zend', 'an optional tech label')
@enduml
```

