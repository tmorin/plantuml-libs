# RemoveDone


```text
material/Action/RemoveDone
```

```text
include('material/Action/RemoveDone')
```



| Illustration | RemoveDone |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/RemoveDone.png) | ![illustration for RemoveDone](../../material/Action/RemoveDone.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element RemoveDone
include('material/Action/RemoveDone')

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
include('material/bootstrap')

' loads the Item which embeds the element RemoveDone
include('material/Action/RemoveDone')

' renders the element
RemoveDone('RemoveDone', 'Remove Done', 'an optional tech label', 'an optional description')
@enduml
```

