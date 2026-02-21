# LocalMall


```text
material/Maps/LocalMall
```

```text
include('material/Maps/LocalMall')
```



| Illustration | LocalMall |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalMall.png) | ![illustration for LocalMall](../../material/Maps/LocalMall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalMallXs>`
- `<$LocalMallSm>`
- `<$LocalMallMd>`
- `<$LocalMallLg>`





## LocalMall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalMall
include('material/Maps/LocalMall')

' renders the element
LocalMall('LocalMall', 'Local Mall', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalMall
include('material/Maps/LocalMall')

' renders the element
LocalMall('LocalMall', 'Local Mall', 'an optional tech label', 'an optional description')
@enduml
```

