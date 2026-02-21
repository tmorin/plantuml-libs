# Dask


```text
simpleicons/D/Dask
```

```text
include('simpleicons/D/Dask')
```



| Illustration | Dask |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dask.png) | ![illustration for Dask](../../simpleicons/D/Dask.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DaskXs>`
- `<$DaskSm>`
- `<$DaskMd>`
- `<$DaskLg>`





## Dask

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dask
include('simpleicons/D/Dask')

' renders the element
Dask('Dask', 'Dask', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dask
include('simpleicons/D/Dask')

' renders the element
Dask('Dask', 'Dask', 'an optional tech label', 'an optional description')
@enduml
```

