# Engineering


```text
material/Social/Engineering
```

```text
include('material/Social/Engineering')
```



| Illustration | Engineering |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Engineering.png) | ![illustration for Engineering](../../material/Social/Engineering.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EngineeringXs>`
- `<$EngineeringSm>`
- `<$EngineeringMd>`
- `<$EngineeringLg>`





## Engineering

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Engineering
include('material/Social/Engineering')

' renders the element
Engineering('Engineering', 'Engineering', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Engineering
include('material/Social/Engineering')

' renders the element
Engineering('Engineering', 'Engineering', 'an optional tech label', 'an optional description')
@enduml
```

