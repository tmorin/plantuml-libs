# Share


```text
material-4/Social/Share
```

```text
include('material-4/Social/Share')
```



| Illustration | Share |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Share.png) | ![illustration for Share](../../material-4/Social/Share.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShareXs>`
- `<$ShareSm>`
- `<$ShareMd>`
- `<$ShareLg>`





## Share

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Share
include('material-4/Social/Share')

' renders the element
Share('Share', 'Share', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Share
include('material-4/Social/Share')

' renders the element
Share('Share', 'Share', 'an optional tech label', 'an optional description')
@enduml
```

