# Done


```text
material/Action/Done
```

```text
include('material/Action/Done')
```



| Illustration | Done |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Done.png) | ![illustration for Done](../../material/Action/Done.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoneXs>`
- `<$DoneSm>`
- `<$DoneMd>`
- `<$DoneLg>`





## Done

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Done
include('material/Action/Done')

' renders the element
Done('Done', 'Done', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Done
include('material/Action/Done')

' renders the element
Done('Done', 'Done', 'an optional tech label', 'an optional description')
@enduml
```

