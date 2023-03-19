# FileCirclePlus


```text
fontawesome-6/Solid/FileCirclePlus
```

```text
include('fontawesome-6/Solid/FileCirclePlus')
```



| Illustration | FileCirclePlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FileCirclePlus.png) | ![illustration for FileCirclePlus](../../fontawesome-6/Solid/FileCirclePlus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileCirclePlusXs>`
- `<$FileCirclePlusSm>`
- `<$FileCirclePlusMd>`
- `<$FileCirclePlusLg>`





## FileCirclePlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileCirclePlus
include('fontawesome-6/Solid/FileCirclePlus')

' renders the element
FileCirclePlus('FileCirclePlus', 'File Circle Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileCirclePlus
include('fontawesome-6/Solid/FileCirclePlus')

' renders the element
FileCirclePlus('FileCirclePlus', 'File Circle Plus', 'an optional tech label', 'an optional description')
@enduml
```

