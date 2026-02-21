# Public


```text
material/Social/Public
```

```text
include('material/Social/Public')
```



| Illustration | Public |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Public.png) | ![illustration for Public](../../material/Social/Public.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PublicXs>`
- `<$PublicSm>`
- `<$PublicMd>`
- `<$PublicLg>`





## Public

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Public
include('material/Social/Public')

' renders the element
Public('Public', 'Public', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Public
include('material/Social/Public')

' renders the element
Public('Public', 'Public', 'an optional tech label', 'an optional description')
@enduml
```

