# Disqus


```text
fontawesome/Brands/Disqus
```

```text
include('fontawesome/Brands/Disqus')
```



| Illustration | Disqus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Disqus.png) | ![illustration for Disqus](../../fontawesome/Brands/Disqus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DisqusXs>`
- `<$DisqusSm>`
- `<$DisqusMd>`
- `<$DisqusLg>`





## Disqus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Disqus
include('fontawesome/Brands/Disqus')

' renders the element
Disqus('Disqus', 'Disqus', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Disqus
include('fontawesome/Brands/Disqus')

' renders the element
Disqus('Disqus', 'Disqus', 'an optional tech label', 'an optional description')
@enduml
```

