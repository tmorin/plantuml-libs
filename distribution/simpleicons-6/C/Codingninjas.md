# Codingninjas


```text
simpleicons-6/C/Codingninjas
```

```text
include('simpleicons-6/C/Codingninjas')
```



| Illustration | Codingninjas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Codingninjas.png) | ![illustration for Codingninjas](../../simpleicons-6/C/Codingninjas.Local.png) |




## Codingninjas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Codingninjas
include('simpleicons-6/C/Codingninjas')

' renders the element
Codingninjas('Codingninjas', 'Codingninjas', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Codingninjas
include('simpleicons-6/C/Codingninjas')

' renders the element
Codingninjas('Codingninjas', 'Codingninjas', 'an optional tech label')
@enduml
```

