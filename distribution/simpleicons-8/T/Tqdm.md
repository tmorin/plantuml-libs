# Tqdm


```text
simpleicons-8/T/Tqdm
```

```text
include('simpleicons-8/T/Tqdm')
```



| Illustration | Tqdm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Tqdm.png) | ![illustration for Tqdm](../../simpleicons-8/T/Tqdm.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tqdm
include('simpleicons-8/T/Tqdm')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tqdm
include('simpleicons-8/T/Tqdm')

' renders the element
Tqdm('Tqdm', 'Tqdm', 'an optional tech label', 'an optional description')
@enduml
```

