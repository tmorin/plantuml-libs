# Mdx


```text
simpleicons-8/M/Mdx
```

```text
include('simpleicons-8/M/Mdx')
```



| Illustration | Mdx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Mdx.png) | ![illustration for Mdx](../../simpleicons-8/M/Mdx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MdxXs>`
- `<$MdxSm>`
- `<$MdxMd>`
- `<$MdxLg>`





## Mdx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Mdx
include('simpleicons-8/M/Mdx')

' renders the element
Mdx('Mdx', 'Mdx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mdx
include('simpleicons-8/M/Mdx')

' renders the element
Mdx('Mdx', 'Mdx', 'an optional tech label', 'an optional description')
@enduml
```

