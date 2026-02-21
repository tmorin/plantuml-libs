# Caterpillar


```text
simpleicons/C/Caterpillar
```

```text
include('simpleicons/C/Caterpillar')
```



| Illustration | Caterpillar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Caterpillar.png) | ![illustration for Caterpillar](../../simpleicons/C/Caterpillar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CaterpillarXs>`
- `<$CaterpillarSm>`
- `<$CaterpillarMd>`
- `<$CaterpillarLg>`





## Caterpillar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Caterpillar
include('simpleicons/C/Caterpillar')

' renders the element
Caterpillar('Caterpillar', 'Caterpillar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Caterpillar
include('simpleicons/C/Caterpillar')

' renders the element
Caterpillar('Caterpillar', 'Caterpillar', 'an optional tech label', 'an optional description')
@enduml
```

