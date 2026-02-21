# LabelImportant


```text
material/Action/LabelImportant
```

```text
include('material/Action/LabelImportant')
```



| Illustration | LabelImportant |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/LabelImportant.png) | ![illustration for LabelImportant](../../material/Action/LabelImportant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LabelImportantXs>`
- `<$LabelImportantSm>`
- `<$LabelImportantMd>`
- `<$LabelImportantLg>`





## LabelImportant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LabelImportant
include('material/Action/LabelImportant')

' renders the element
LabelImportant('LabelImportant', 'Label Important', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LabelImportant
include('material/Action/LabelImportant')

' renders the element
LabelImportant('LabelImportant', 'Label Important', 'an optional tech label', 'an optional description')
@enduml
```

