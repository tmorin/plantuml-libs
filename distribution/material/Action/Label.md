# Label


```text
material/Action/Label
```

```text
include('material/Action/Label')
```



| Illustration | Label |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Label.png) | ![illustration for Label](../../material/Action/Label.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LabelXs>`
- `<$LabelSm>`
- `<$LabelMd>`
- `<$LabelLg>`





## Label

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Label
include('material/Action/Label')

' renders the element
Label('Label', 'Label', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Label
include('material/Action/Label')

' renders the element
Label('Label', 'Label', 'an optional tech label', 'an optional description')
@enduml
```

