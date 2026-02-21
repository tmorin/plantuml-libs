# HdrWeak


```text
material/Image/HdrWeak
```

```text
include('material/Image/HdrWeak')
```



| Illustration | HdrWeak |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/HdrWeak.png) | ![illustration for HdrWeak](../../material/Image/HdrWeak.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HdrWeakXs>`
- `<$HdrWeakSm>`
- `<$HdrWeakMd>`
- `<$HdrWeakLg>`





## HdrWeak

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element HdrWeak
include('material/Image/HdrWeak')

' renders the element
HdrWeak('HdrWeak', 'Hdr Weak', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HdrWeak
include('material/Image/HdrWeak')

' renders the element
HdrWeak('HdrWeak', 'Hdr Weak', 'an optional tech label', 'an optional description')
@enduml
```

