# Creativecommons


```text
simpleicons-14/C/Creativecommons
```

```text
include('simpleicons-14/C/Creativecommons')
```



| Illustration | Creativecommons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Creativecommons.png) | ![illustration for Creativecommons](../../simpleicons-14/C/Creativecommons.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreativecommonsXs>`
- `<$CreativecommonsSm>`
- `<$CreativecommonsMd>`
- `<$CreativecommonsLg>`





## Creativecommons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Creativecommons
include('simpleicons-14/C/Creativecommons')

' renders the element
Creativecommons('Creativecommons', 'Creativecommons', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Creativecommons
include('simpleicons-14/C/Creativecommons')

' renders the element
Creativecommons('Creativecommons', 'Creativecommons', 'an optional tech label', 'an optional description')
@enduml
```

