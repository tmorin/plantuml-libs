# Wikimediafoundation


```text
simpleicons-14/W/Wikimediafoundation
```

```text
include('simpleicons-14/W/Wikimediafoundation')
```



| Illustration | Wikimediafoundation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wikimediafoundation.png) | ![illustration for Wikimediafoundation](../../simpleicons-14/W/Wikimediafoundation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WikimediafoundationXs>`
- `<$WikimediafoundationSm>`
- `<$WikimediafoundationMd>`
- `<$WikimediafoundationLg>`





## Wikimediafoundation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wikimediafoundation
include('simpleicons-14/W/Wikimediafoundation')

' renders the element
Wikimediafoundation('Wikimediafoundation', 'Wikimediafoundation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wikimediafoundation
include('simpleicons-14/W/Wikimediafoundation')

' renders the element
Wikimediafoundation('Wikimediafoundation', 'Wikimediafoundation', 'an optional tech label', 'an optional description')
@enduml
```

