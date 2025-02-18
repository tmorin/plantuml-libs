# Namecheap


```text
simpleicons-14/N/Namecheap
```

```text
include('simpleicons-14/N/Namecheap')
```



| Illustration | Namecheap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Namecheap.png) | ![illustration for Namecheap](../../simpleicons-14/N/Namecheap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NamecheapXs>`
- `<$NamecheapSm>`
- `<$NamecheapMd>`
- `<$NamecheapLg>`





## Namecheap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Namecheap
include('simpleicons-14/N/Namecheap')

' renders the element
Namecheap('Namecheap', 'Namecheap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Namecheap
include('simpleicons-14/N/Namecheap')

' renders the element
Namecheap('Namecheap', 'Namecheap', 'an optional tech label', 'an optional description')
@enduml
```

