# SportsRugby


```text
material/Social/SportsRugby
```

```text
include('material/Social/SportsRugby')
```



| Illustration | SportsRugby |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/SportsRugby.png) | ![illustration for SportsRugby](../../material/Social/SportsRugby.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SportsRugbyXs>`
- `<$SportsRugbySm>`
- `<$SportsRugbyMd>`
- `<$SportsRugbyLg>`





## SportsRugby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SportsRugby
include('material/Social/SportsRugby')

' renders the element
SportsRugby('SportsRugby', 'Sports Rugby', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsRugby
include('material/Social/SportsRugby')

' renders the element
SportsRugby('SportsRugby', 'Sports Rugby', 'an optional tech label', 'an optional description')
@enduml
```

