# Googlephotos


```text
simpleicons-14/G/Googlephotos
```

```text
include('simpleicons-14/G/Googlephotos')
```



| Illustration | Googlephotos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googlephotos.png) | ![illustration for Googlephotos](../../simpleicons-14/G/Googlephotos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglephotosXs>`
- `<$GooglephotosSm>`
- `<$GooglephotosMd>`
- `<$GooglephotosLg>`





## Googlephotos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googlephotos
include('simpleicons-14/G/Googlephotos')

' renders the element
Googlephotos('Googlephotos', 'Googlephotos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlephotos
include('simpleicons-14/G/Googlephotos')

' renders the element
Googlephotos('Googlephotos', 'Googlephotos', 'an optional tech label', 'an optional description')
@enduml
```

