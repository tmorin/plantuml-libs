# Dask


```text
simpleicons-8/D/Dask
```

```text
include('simpleicons-8/D/Dask')
```



| Illustration | Dask |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Dask.png) | ![illustration for Dask](../../simpleicons-8/D/Dask.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Dask
include('simpleicons-8/D/Dask')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Dask
include('simpleicons-8/D/Dask')

' renders the element
Dask('Dask', 'Dask', 'an optional tech label', 'an optional description')
@enduml
```

