# Viadeo


```text
simpleicons/V/Viadeo
```

```text
include('simpleicons/V/Viadeo')
```



| Illustration | Viadeo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Viadeo.png) | ![illustration for Viadeo](../../simpleicons/V/Viadeo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViadeoXs>`
- `<$ViadeoSm>`
- `<$ViadeoMd>`
- `<$ViadeoLg>`





## Viadeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Viadeo
include('simpleicons/V/Viadeo')

' renders the element
Viadeo('Viadeo', 'Viadeo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Viadeo
include('simpleicons/V/Viadeo')

' renders the element
Viadeo('Viadeo', 'Viadeo', 'an optional tech label', 'an optional description')
@enduml
```

