# Codingninjas


```text
simpleicons-5/C/Codingninjas
```

```text
include('simpleicons-5/C/Codingninjas')
```



| Illustration | Codingninjas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codingninjas.png) | ![illustration for Codingninjas](../../simpleicons-5/C/Codingninjas.Local.png) |




## Codingninjas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codingninjas
include('simpleicons-5/C/Codingninjas')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codingninjas
include('simpleicons-5/C/Codingninjas')

' renders the element
Codingninjas('Codingninjas', 'Codingninjas', 'an optional tech label')
@enduml
```

