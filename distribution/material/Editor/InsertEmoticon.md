# InsertEmoticon


```text
material/Editor/InsertEmoticon
```

```text
include('material/Editor/InsertEmoticon')
```



| Illustration | InsertEmoticon |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/InsertEmoticon.png) | ![illustration for InsertEmoticon](../../material/Editor/InsertEmoticon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InsertEmoticonXs>`
- `<$InsertEmoticonSm>`
- `<$InsertEmoticonMd>`
- `<$InsertEmoticonLg>`





## InsertEmoticon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element InsertEmoticon
include('material/Editor/InsertEmoticon')

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
include('material/bootstrap')

' loads the Item which embeds the element InsertEmoticon
include('material/Editor/InsertEmoticon')

' renders the element
InsertEmoticon('InsertEmoticon', 'Insert Emoticon', 'an optional tech label', 'an optional description')
@enduml
```

