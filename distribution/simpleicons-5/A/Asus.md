# Asus


```text
simpleicons-5/A/Asus
```

```text
include('simpleicons-5/A/Asus')
```



| Illustration | Asus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Asus.png) | ![illustration for Asus](../../simpleicons-5/A/Asus.Local.png) |




## Asus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Asus
include('simpleicons-5/A/Asus')

' renders the element
Asus('Asus', 'Asus', 'an optional tech label')
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

' loads the Item which embeds the element Asus
include('simpleicons-5/A/Asus')

' renders the element
Asus('Asus', 'Asus', 'an optional tech label')
@enduml
```

