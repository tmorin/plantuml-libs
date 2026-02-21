# Class


```text
material/Action/Class
```

```text
include('material/Action/Class')
```



| Illustration | Class |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Class.png) | ![illustration for Class](../../material/Action/Class.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClassXs>`
- `<$ClassSm>`
- `<$ClassMd>`
- `<$ClassLg>`





## Class

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Class
include('material/Action/Class')

' renders the element
Class('Class', 'Class', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Class
include('material/Action/Class')

' renders the element
Class('Class', 'Class', 'an optional tech label', 'an optional description')
@enduml
```

