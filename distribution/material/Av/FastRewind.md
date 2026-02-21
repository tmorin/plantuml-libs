# FastRewind


```text
material/Av/FastRewind
```

```text
include('material/Av/FastRewind')
```



| Illustration | FastRewind |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/FastRewind.png) | ![illustration for FastRewind](../../material/Av/FastRewind.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FastRewindXs>`
- `<$FastRewindSm>`
- `<$FastRewindMd>`
- `<$FastRewindLg>`





## FastRewind

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FastRewind
include('material/Av/FastRewind')

' renders the element
FastRewind('FastRewind', 'Fast Rewind', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FastRewind
include('material/Av/FastRewind')

' renders the element
FastRewind('FastRewind', 'Fast Rewind', 'an optional tech label', 'an optional description')
@enduml
```

