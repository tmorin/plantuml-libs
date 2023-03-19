# RemoveDone


```text
material-4/Action/RemoveDone
```

```text
include('material-4/Action/RemoveDone')
```



| Illustration | RemoveDone |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/RemoveDone.png) | ![illustration for RemoveDone](../../material-4/Action/RemoveDone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RemoveDoneXs>`
- `<$RemoveDoneSm>`
- `<$RemoveDoneMd>`
- `<$RemoveDoneLg>`





## RemoveDone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RemoveDone
include('material-4/Action/RemoveDone')

' renders the element
RemoveDone('RemoveDone', 'Remove Done', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RemoveDone
include('material-4/Action/RemoveDone')

' renders the element
RemoveDone('RemoveDone', 'Remove Done', 'an optional tech label', 'an optional description')
@enduml
```

