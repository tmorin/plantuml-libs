# Tqdm


```text
simpleicons/T/Tqdm
```

```text
include('simpleicons/T/Tqdm')
```



| Illustration | Tqdm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tqdm.png) | ![illustration for Tqdm](../../simpleicons/T/Tqdm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TqdmXs>`
- `<$TqdmSm>`
- `<$TqdmMd>`
- `<$TqdmLg>`





## Tqdm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tqdm
include('simpleicons/T/Tqdm')

' renders the element
Tqdm('Tqdm', 'Tqdm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tqdm
include('simpleicons/T/Tqdm')

' renders the element
Tqdm('Tqdm', 'Tqdm', 'an optional tech label', 'an optional description')
@enduml
```

