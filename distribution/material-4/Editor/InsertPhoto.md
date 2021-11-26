# InsertPhoto


```text
material-4/Editor/InsertPhoto
```

```text
include('material-4/Editor/InsertPhoto')
```



| Illustration | InsertPhoto |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/InsertPhoto.png) | ![illustration for InsertPhoto](../../material-4/Editor/InsertPhoto.Local.png) |




## InsertPhoto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element InsertPhoto
include('material-4/Editor/InsertPhoto')

' renders the element
InsertPhoto('InsertPhoto', 'Insert Photo', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element InsertPhoto
include('material-4/Editor/InsertPhoto')

' renders the element
InsertPhoto('InsertPhoto', 'Insert Photo', 'an optional tech label')
@enduml
```

