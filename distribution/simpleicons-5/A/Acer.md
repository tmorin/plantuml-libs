# Acer


```text
simpleicons-5/A/Acer
```

```text
include('simpleicons-5/A/Acer')
```



| Illustration | Acer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Acer.png) | ![illustration for Acer](../../simpleicons-5/A/Acer.Local.png) |




## Acer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Acer
include('simpleicons-5/A/Acer')

' renders the element
Acer('Acer', 'Acer', 'an optional tech label')
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

' loads the Item which embeds the element Acer
include('simpleicons-5/A/Acer')

' renders the element
Acer('Acer', 'Acer', 'an optional tech label')
@enduml
```

