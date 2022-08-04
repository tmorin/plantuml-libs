# InsertEmoticon


```text
material-4/Editor/InsertEmoticon
```

```text
include('material-4/Editor/InsertEmoticon')
```



| Illustration | InsertEmoticon |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/InsertEmoticon.png) | ![illustration for InsertEmoticon](../../material-4/Editor/InsertEmoticon.Local.png) |




## InsertEmoticon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element InsertEmoticon
include('material-4/Editor/InsertEmoticon')

' renders the element
InsertEmoticon('InsertEmoticon', 'Insert Emoticon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element InsertEmoticon
include('material-4/Editor/InsertEmoticon')

' renders the element
InsertEmoticon('InsertEmoticon', 'Insert Emoticon', 'an optional tech label', 'an optional description')
@enduml
```

